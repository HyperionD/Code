from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String


class SqliteDB:
    def __init__(self, db_name):
        db_dir = './db'
        self.engine = create_engine('sqlite:///{0}/{1}'.format(db_dir, db_name))
        self.connect = self.engine.connect()
        self.metadata = MetaData(bind=self.engine)

    def create_table(self, table_name, data):
        table = Table(table_name, self.metadata, Column("ID", Integer, primary_key=True),
                                                 *(Column(col["col_name"], String(), unique=col["unique"]) for col in data))
        table.create(checkfirst=True)
        return table

    def insert_table(self, table, data):
        try:
            self.connect.execute(table.insert(), data)
        except Exception as e:
            print(e)

    def get_tables(self):
        return self.engine.table_names()

    def get_cols(self, table):
        col_names = []
        for col in table.columns:
            col_names.append(col.name)
        return col_names

    def get_all_data(self, table):
        data = []
        all = self.connect.execute(select([table]))
        for row in all:
            data.append(row)
        return data

if __name__ == "__main__":
    data = [{"col_name": "user", "unique": True}, {"col_name": "password", "unique": False}]
    insert_data = [{"user": "test", "password": "test"}, {"user": "hyperion", "password": "dongjj"}]

    db = SqliteDB("backend.db")
    table = db.create_table("user", data)
    db.insert_table(table, insert_data)
    print(db.get_tables())