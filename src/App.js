import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Package from './components/Package'

import './App.css'

// Replace your code here
class App extends Component {
  state = {packagesList: [], isShowLoader: false}

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    this.setState({isShowLoader: true})
    const requestUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(requestUrl)
    const data = await response.json()
    const {packages} = data
    const formattedPackagesList = packages.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
      name: eachItem.name,
    }))
    console.log(formattedPackagesList)
    this.setState({packagesList: formattedPackagesList, isShowLoader: false})
  }

  renderLoaderView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderPackagesView = () => {
    const {packagesList} = this.state
    return (
      <ul className="packages-container">
        {packagesList.map(eachItem => (
          <Package packageDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isShowLoader} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        {isShowLoader ? this.renderLoaderView() : this.renderPackagesView()}
      </div>
    )
  }
}

export default App
