import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid' //using Material UI
import axios from 'axios' //Using Axios to get API data

class App extends Component   {

    //declaring state, Images and errors variables
    state = {
        
        Images: [],
        errors: null
    }

    //function to get data using axios
    getPosts(){

        axios

        .get("https://jsonplaceholder.typicode.com/photos")

        .then(response => {                
                this.setState({
                Images: response.data,
                                
            })
        })

        //catching errors
        .catch(errors => this.setState({errors}))
    }

    //calling getPost() in the recomended lifecycle stage
    componentDidMount(){

        this.getPosts()
    }
       
    render() {

        let ImageGrid //new variable to be returned as final view 
        let size = 4    //variable to be use as screen size 
        
        const { Images } = this.state
        
        if ( Images) {
            ImageGrid = (
                //Using Material UI feature, Grid, to map the data
                <Grid container justify="center">
                    {Images.map((img, index) =>(
                        
                        <Grid item xs={size}
                        key={index}>
                        <img src={img.thumbnailUrl} alt="foto" />
                        </Grid>
                    ))}
                </Grid>
            )
        }        
    
        return(
            //Displaying 
           <div>
               {ImageGrid}
           </div>
           
        )

    }
}


export default App