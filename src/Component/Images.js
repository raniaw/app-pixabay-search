import React, { Component } from 'react'

export default class Images extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        url:"",
        isLoading:"false",
        fetchedData:[]
      }
    }
    
    static getDerivedStateFromProps(props, state) {
        if(state.url!==props.url){
            return (state.url=props.url);
        }else{
            return null;
        }
    }

    componentDidMount() {
        console.log("component Images Did Mount");
        this.setState({isLoading:true});
        const url=this.state.url;
        console.log("url ", url);
        
        fetch(url)
        .then((response)=>{
            return(response.json())
        })
        .then((data)=>{
            console.log(data);
            this.setState({
                fetchedData:data.hits,
                isLoading:false
            })
        })
    }
    

    render() {
        let imgArr=[];
        let loading;
        if(this.state.isLoading){
            loading=<div>
                <h5>loading...</h5>
                <div className="loadDiv"></div>
            </div>
        }

        if(this.state.fetchedData.length>0){
            imgArr=this.state.fetchedData.map((item,index)=>{
                // let style={
                //     // width:item.previewWidth,
                //     // height: item.previewHeight,
                //     // display: 'inline-block'
                // }
                return (
            
                    <div key={index} className="images">
                      {/* <div key={index} style={style}></div> */}
                        <a href={item.largeImageURL} target="_blank">
                            {/* <img src={item.previewURL}  /> */}
                            <img src={item.webformatURL}  alt={item.tags} title={item.tags}/>
                            {/* <img src={item.largeImageURL}  /> */}
                        </a>   
                    </div>
                )
            })
        }
        return (
            
            <div className="images">
                {loading}
                {imgArr}
            </div>
        )
    }
}
