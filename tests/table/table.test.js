const { Table, Row, Head, Data } = require("../../dist-ts/table/table");

test("assert Head", () => {
  const head = new Head("head1");
  expect(head.stringify()).toBe(`<th>head1</th>`);
  head.colspan = 2;
  expect(head.stringify()).toBe(`<th>head1</th>`);
});

test("assert Data", () => {
  const data = new Data("data1");
  expect(data.stringify()).toBe(`<td colspan="1">data1</td>`);
  data.setColspan(2);
  expect(data.stringify()).toBe(`<td colspan="2">data1</td>`);
});

test("assert Row", () => {
  const row = new Row();
  const data = new Data("data1", 2);
  const data2 = new Data("data2");

  row.addData(data);
  expect(row.stringify()).toBe(`<tr><td colspan="2">data1</td></tr>`);

  row.addData(data2);
  expect(row.stringify()).toBe(
    `<tr><td colspan="2">data1</td><td colspan="1">data2</td></tr>`
  );
});

test("assert Table", () => {
  const table = new Table();

  const headRow = new Row();
  const head = new Head("head1");
  const head2 = new Head("head2");

  const dataRow = new Row();
  const data = new Data("data1");
  const data2 = new Data("data2", 4);

  table.addHead(headRow);
  headRow.addData(head);
  headRow.addData(head2);
  expect(table.stringify()).toBe(
    `<table><tr><th>head1</th><th>head2</th></tr></table>`
  );

  dataRow.addData(data);
  table.addRow(dataRow);
  expect(table.stringify()).toBe(
    `<table><tr><th>head1</th><th>head2</th></tr><tr><td colspan="1">data1</td></tr></table>`
  );

  dataRow.addData(data2);
  expect(table.stringify()).toBe(
    `<table><tr><th>head1</th><th>head2</th></tr><tr><td colspan="1">data1</td><td colspan="4">data2</td></tr></table>`
  );
});

test("assert Headless Table", () => {
  const table = new Table();
  const row = new Row();
  const data = new Data("data1");
  const data2 = new Data("data2");

  table.addRow(row);
  row.addData(data);
  row.addData(data2);

  expect(table.stringify()).toBe(
    `<table><tr><td colspan="1">data1</td><td colspan="1">data2</td></tr></table>`
  );
});
