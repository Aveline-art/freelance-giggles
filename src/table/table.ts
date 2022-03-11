interface Table {
  head: Row[];
  rows: Row[];
}

interface Row {
  data: Head[] | Data[];
}

interface Head {
  text: string;
}

interface Data extends Head {
  colspan: number;
}

class Table {
  constructor() {
    this.head = [];
    this.rows = [];
  }

  addHead(row: Row) {
    this.head.push(row);
  }

  addRow(row: Row) {
    this.rows.push(row);
  }

  stringify() {
    return `<table>${this.head
      .map((row) => row.stringify())
      .join("")}${this.rows.map((row) => row.stringify()).join()}</table>`;
  }
}

class Row {
  constructor() {
    this.data = [];
  }

  addData(data: Data) {
    this.data.push(data);
  }

  stringify() {
    return `<tr>${this.data.map((datum) => datum.stringify()).join("")}</tr>`;
  }
}

class Head {
  constructor(text: string) {
    this.text = text;
  }

  stringify() {
    return `<th>${this.text}</th>`;
  }
}

class Data extends Head {
  constructor(text: string, colspan = 1) {
    super(text);
    this.colspan = colspan;
  }

  setColspan(num: number) {
    this.colspan = num;
  }

  stringify() {
    return `<td colspan="${this.colspan}">${this.text}</td>`;
  }
}

export { Table, Row, Head, Data };
