# reference : https://stackoverflow.com/questions/674304/why-is-init-always-called-after-new
# answered by vartec

def singleton(cls):
    instances = {}

    def get_instance():
        if cls not in instances:
            instances[cls] = cls()
        return instances[cls]

    return get_instance


@singleton
class Mine:
    def __init__(self):
        self.x = 12
        print("object created")


def main():
    m = Mine()
    www = Mine()
    www = Mine()
    www = Mine()


if __name__ == '__main__':
    main()
