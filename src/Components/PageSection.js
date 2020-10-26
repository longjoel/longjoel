export default  ({ id, title, caption, children }) => {

    if (title || caption) {
      return <div className="container m-3 p-3 bg-light rounded"  >
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div>
              <h3 ><a class="anchor text-dark" id={id} href={`#${id}`}>{title}</a></h3>
              <h5><em>{caption}</em></h5>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
  
            {children}
  
          </div>
  
  
        </div>
      </div>
    }
    else {
      return <div className="container m-3 p-3 bg-light rounded"  >
        <div className="row">
          <div className="col-sm-12">
  
            {children}
  
          </div>
        </div>
      </div>
    }
  
  }