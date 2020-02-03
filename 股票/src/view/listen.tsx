import React,{Component} from 'react'
import {withRouter,RouteComponentProps} from 'react-router-dom';
import {listdata} from '../api/info'
import '../style/listen.css'
// import request from '../utils/request'
export default withRouter( class Listen extends Component<RouteComponentProps>{
    state={
       listdatas:[] 
    }
    render(){
        return(
            <div>
                <div className='topdiv'>
                    <h4>Listen</h4>
                    <button onClick={()=>{
                        this.props.history.push('/heard')
                    }}>返回</button>
                    <button>请求</button>
                </div>
                
                {console.log(this.state.listdatas)}
            </div>
        )
    }
    componentDidMount():void{
        listdata().then(res=>{//股票列表数据
            // console.log(res.data.result.data)
            this.setState({
                listdatas:res.data.result.data
            })
           
        })
    }
})