const [data , setdata] = useState([])

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => setdata(data))


return(
    <Fragment>
    <h1>
        tabla
    </h1>

    <table border={1}>
    <thead>
                    <tr>
                    <th>ID</th>
                    <th>title</th>
                    </tr>
                </thead>
        {
            data.map((data) => (
                
                <tbody>
                <tr>
                    <td>{data.id}</td>
                <td>{data.title}</td>
                </tr>
                </tbody>
            ))
        }
    </table>
    <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
      </div>
        </Fragment>
)

