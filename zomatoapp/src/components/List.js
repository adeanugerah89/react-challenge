import React, {Component} from 'react'

class List extends Component {
  constructor() {
    super()
    this.state = {
      listData: []
    }
  }
  
  getListData() {
    if(localStorage.getItem('listData') !== null) {
      JSON.parse(localStorage.getItem('listData')).forEach(data => {
        this.state.listData.push(data)
      })
    } else {
      console.log('data kosong');
    }
  }
  
  componentWillMount() {
    this.getListData()
    console.log('================');
  }
  
  render() {
    var data = this.state.listData
    return (
      <div className="container">
      {
        data.map(item => {
          return (
            <div className="columns">
              <div className="column is-medium" id="listBugs">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                    nama Makanan: {item.restaurant.name}
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      Rating: {item.restaurant.user_rating.votes}<br/>
                      alamat: {item.restaurant.location.address}<br/>
                      kisaran harga untuk berdua: {item.restaurant.average_cost_for_two}
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item" onClick={(index,id) => {this.deleteBug(item.id)}}>Delete</a>
                  </footer>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
  
}

export default List;