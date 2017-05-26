import psutil
import platform


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
            # break
        else:
            size /= step


os = platform.platform()


def disk():
    disk_info = {}
    for partition_item in psutil.disk_partitions():
        if partition_item.fstype != "":
            partition_path = partition_item.mountpoint
            disk_size = psutil.disk_usage(partition_path)
            partition_total = convert_bytes(disk_size.total)
            partition_used = convert_bytes(disk_size.used)
            partition_free = convert_bytes(disk_size.free)
            disk_info[partition_path] = {"total": partition_total, "used": partition_used, "free": partition_free}
    return disk_info


if __name__ == "__main__":
    print(convert_bytes(1000000000000000000))
