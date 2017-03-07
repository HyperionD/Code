import shutil


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
        self._disk_info = shutil.disk_usage(self.path)
        self._total_disk = self._disk_info[0]
        self._use_disk = self._disk_info[1]
        self._free_disk = self._disk_info[2]

    def total_disk(self):
        return convert_bytes(self._total_disk)

    def use_disk(self):
        return convert_bytes(self._use_disk)

    def free_disk(self):
        return convert_bytes(self._free_disk)

    def use_percent(self):
        return '{:.2f}'.format(self._use_disk / self._total_disk * 100)

    def free_percent(self):
        return '{:.2f}'.format(self._free_disk / self._total_disk * 100)


class Mail:
    pass

