import React, { Component } from 'react';
import InputField from './Component/InputField';
import Images from './Component/Images.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       root:"https://pixabay.com/api/",
       key:"13971465-385285dab261de63e94c9104c",
       query:"",
       url:"",
       letSearch: false,
       loadedImages:null
    }
  }

  saveQuery=(e)=>{
    e.preventDefault();
    this.setState({
      query:e.target.value, 
      letSearch:false
    })
  }
  
  searchImages=()=>{
    //"flower rose" => ["flower","rose"]
    let words= this.state.query.split(" ");

    //https://pixabay.com/api/?key=13971465-385285dab261de63e94c9104c&q=flower+rose+
    let newUrl = this.state.root+"?key="+this.state.key+"&per_page=200&q=";
    words.forEach((item)=>{
      newUrl+=item+"+";
      console.log(newUrl);
    })
    this.setState({
      url:newUrl,
      letSearch:true,
      loadedImages:null
    })
  }


  loadImage=()=>{
    let newImages=<Images url={this.state.url}/>;
    this.setState({loadedImages:newImages, letSearch:false})
  }

  render() {
    if(this.state.letSearch){
      this.loadImage();
    }
    return (
      <div className="App">
        <InputField change={this.saveQuery} click={this.searchImages}/>
        {this.state.loadedImages}
      </div>
    )
  }
}





