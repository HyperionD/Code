import shutil
import json
import smtplib
from email.mime.text import MIMEText
from email.header import Header


def convert_bytes(size, step=1024):
    """
    Convert Bytes to human readable

    转换Bytes大小为易读的单位，最大单位为TB，保留两位小数

    {:.2f}保留两位小数

    :param size: Bytes值
    :param step: 单位间的进位大小，默认值:1024
    :return: 返回转换后的结果
    """

    unit = ['B', 'KB', 'MB', 'GB', 'TB']

    for i in range(len(unit)):
        if size < step or i == len(unit) - 1:
            result = '{:.2f}{}'.format(size, unit[i])
            return result
            break
        else:
            size /= step


class Disk:
    """
    获得硬盘分区总空间、使用空间、剩余空间、使用百分比、剩余百分比

    shutil.disk_usage(path): 返回元组以bytes为单位(total, usage, free)
    """

    def __init__(self, path):

        self.path = path
        self.__disk_info = shutil.disk_usage(self.path)
        self.__total_disk = self.__disk_info[0]
        self.__use_disk = self.__disk_info[1]
        self.__free_disk = self.__disk_info[2]

    def total_disk(self):
        return convert_bytes(self.__total_disk)

    def use_disk(self):
        return convert_bytes(self.__use_disk)

    def free_disk(self):
        return convert_bytes(self.__free_disk)

    def use_percent(self):
        return '{:.2f}'.format(self.__use_disk / self.__total_disk * 100)

    def free_percent(self):
        return '{:.2f}'.format(self.__free_disk / self.__total_disk * 100)


class JSONObject:
    def __init__(self, d):
        self.__dict__ = d


class Mail:
    def __init__(self, data_path):

        self.data_path = data_path

        with open(data_path) as f:
            self.__data = json.load(f, object_hook=JSONObject)

    def login_server(self):

        server = smtplib.SMTP()
        server.connect(self.__data.server)
        server.login(self.__data.user, self.__data.password)

        return server

    def create_message(self):

        msg = MIMEText('Disk has used {}%'.format(Disk('C:').use_percent()), 'plain', 'utf8')
        msg['From'] = '{} <{}>'.format(self.__data.fromname, Header(self.__data.user, 'utf-8'))
        msg['To'] = '<{}>'.format(Header(self.__data.toaddr, 'utf-8'))
        msg['Subject'] = Header(self.__data.subject, 'utf-8')

        return msg

    def send_mail(self):

        server = self.login_server()
        msg = self.create_message()
        server.sendmail(self.__data.user, self.__data.toaddr, msg.as_string())
        server.quit()


