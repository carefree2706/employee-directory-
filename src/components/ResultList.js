import React from "react";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  console.log("Sortconfig: ", sortConfig);
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ResultList = (props) => {
  console.log(props.result);
  const { items, requestSort, sortConfig } = useSortableData(props.result);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  const tableStyle = {
    marginleft: "10%",
    padding: "20px",
    width: "1000px",
  };

  const divStyle = {
    width: "100%",
    margin: "20px",
  };

  return (
    <div style={divStyle}>
      <table style={tableStyle}>
        <caption> Employee Directory</caption>
        <thead>
          <tr>
            <th>Employee Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("email")}
                className={getClassNamesFor("email")}
              >
                email
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("phone")}
                className={getClassNamesFor("phone")}
              >
                Phone
              </button>
            </th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item) => (
            <tr key={item.id.value}>
              <td>
                {" "}
                <img alt={item.name} src={item.picture.large} />
              </td>
              <td> {item.name.first}</td>
              <td> {item.name.last}</td>
              <td> {item.email}</td>
              <td> {item.phone}</td>
              <td> {item.dob.age}</td>
            </tr>

            // <EmployeeCard
            //   picture={item.picture.large}
            //   firstName={item.name.first}
            //   lastName={item.name.last}
            //   email={item.email}
            //   phone={item.phone}
            //   dob={item.dob.date}
            //    />
          ))}


        </tbody>
      </table>
    </div>
  );
};

export default ResultList;
