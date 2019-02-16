import React from 'react'
import SubCart from '../SubCart/SubCart'
import './cart.css'
export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            msg:'',
            isShow:false,
        };
        this.countAdd=this.countAdd.bind(this);
        this.countCut=this.countCut.bind(this);
        this.itemDel=this.itemDel.bind(this);
        this.itemStatus=this.itemStatus.bind(this);
        this.selectAll=this.selectAll.bind(this);
        this.totalPrice=()=>{
            let sum=0;
            this.state.list.forEach((item)=>{
                if (item.checked){
                    sum +=item.num * item.price
                }
            });
            return sum;
        }
    }
    render(){
        return(
            <div className="cart">
                <h3 className="title">购物车</h3>
                { this.state.isShow &&
                this.state.list.map((item,index)=>{
                    return <SubCart key={index} item={item} add={this.countAdd} cut={this.countCut} del={this.itemDel}
                    itemStatus={this.itemStatus}/>
                })

                }
                { this.state.isShow &&
                    <div className="totalPrice">
                    <label htmlFor="all" className='total_l'>
                        <input type="checkbox" id='all' onChange={this.selectAll}/>&nbsp;全选/全不选
                    </label>
                    <p className='total_r'>总价：￥<span>{this.totalPrice()}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className='btn'>结 算</span></p>
                </div>
                }
                <p className='title'>{this.state.msg}</p>
            </div>
        )
    }
    itemStatus(id,onOff){
        this.setState({list:
            this.state.list.map((item)=>{
                if (item.id===id){
                    item.checked=onOff;
                    return item;
                } else {
                   return item;
                }
            })
        });
    }
    selectAll(e){
        if (e.target.checked===true) {
            this.setState({
                list:
                    this.state.list.map((item) => {
                        item.checked=true;
                        return item
                    })
            });
        }else if (e.target.checked===false) {
            this.setState({
                list:
                    this.state.list.map((item) => {
                        item.checked = false;
                        return item
                    })
            });
        }
    }
    countAdd(id){
        this.setState({list:
            this.state.list.map((item)=>{
                if (item.id===id) {
                    item.num+=1;
                    return item
                }else{
                    return item
                }
            })
        })
    }
    countCut(id){
        this.setState({list:
            this.state.list.map((item)=>{
                if (item.id===id) {
                    item.num-=1;
                    return item
                }else{
                    return item
                }
            })
        })
    }
    itemDel(id){
        let indexDel;
        this.state.list.forEach((item,index)=>{
            if (item.id===id) {
                indexDel=index
            }
        });
        let OldList=this.state.list;
        OldList.splice(indexDel,1);
        this.setState({list:OldList});
        let storage=window.localStorage;
        let data=JSON.parse(storage['GoodsInfo']);
        let indexDel2;
        data.forEach((item,index)=>{
            if (item.id===id) {
                indexDel2=index
            }
        });
        data.splice(indexDel2,1);
        if (data.length===0) {
            storage.removeItem('GoodsInfo');
            this.setState({isShow:false})
        }else{
            storage['GoodsInfo']=JSON.stringify(data);
        }
    }
    componentDidMount(){
            let storage=window.localStorage;
            let data;
            if(storage['GoodsInfo']){
                data=JSON.parse(storage['GoodsInfo']);
            }else {
                data=[];
            }
            let that=this;
            if (data.length!==0) {
                fetch(
                    '/data/detail.json'
                ).then(
                    res => res.json()
                ).then(
                    _data =>{
                        // console.log(_data)
                        let _list=[];
                        _data['data'].forEach((item)=>{
                            data.forEach((val)=>{
                                if (item.id===val.id) {
                                    item.num=val.num;
                                    item.checked=false;
                                    _list.push(item)
                                }
                            })
                        });
                        // console.log(_list);
                        that.setState({list:_list,isShow:true})
                    }
                )
            }else{
                this.setState({msg:"购物车是空的，赶紧去抢购吧"})
            }
    }
}