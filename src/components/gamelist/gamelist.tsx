import React from "react";
import { IonList, IonContent, withIonLifeCycle, IonButton } from "@ionic/react";
import GameItem from "../gameItem/gameItem";


export type ListType = "Deal" | "Lowest" | "Savings" | "Search"

export interface GameListProps {
    type: ListType
    title?: string
}

export interface GameListState {
    data: any
    isload: boolean
}

/**
 * GameList component that holds GameItems and makes AJAX calls to cheapshark api
 */
export default class GameList extends React.Component<GameListProps, GameListState> {
    public url: string = "" //url for different deals and search
    public pagenum: number = 0

    constructor(props: GameListProps){
        super(props)
        console.log("Im getting called")
        this.state ={ 
            data: {},
            isload: false
        }
        if (this.props.type === "Deal") {
            this.url = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pagenum}`
        } else if (this.props.type === "Lowest") {
            this.url = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pagenum}&sortBy=Price`
        } else if (this.props.type === "Savings") {
            this.url = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pagenum}&sortBy=Savings`
        } else if (this.props.type === "Search") {
            this.url = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pagenum}&title=${this.props.title}`
        }
        this.setState({data: null, isload: false})
    }
    
    /**
     * For going to next page, remakes url and does AJAX request
     */
    private fetchGames() {
        if (this.props.type === "Deal") {
            this.url = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pagenum}`
        } else if (this.props.type === "Lowest") {
            this.url = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pagenum}&sortBy=Price`
        } else if (this.props.type === "Savings") {
            this.url = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pagenum}&sortBy=Savings`
        } else if (this.props.type === "Search") {
            this.url = `https://www.cheapshark.com/api/1.0/deals?pageNumber=${this.pagenum}&title=${this.props.title}`
        }
        this.setState({data: null, isload: false})
        let options: RequestInit = {
            method: "GET",
            redirect: "follow"
        }

        fetch(this.url, options)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({data: result, isload: true})
        }, 
        (error) => {
            this.setState({isload: false})
        })

    }

    /**
     * On Mount, make AJAX call and set list
     */
    componentWillMount() {
        let options: RequestInit = {
            method: "GET",
            redirect: "follow"
        }

        fetch(this.url, options)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({data: result, isload: true})
        }, 
        (error) => {
            this.setState({isload: false})
        })
    }

    /**
     * Increases page number and calls for AJAX to happen
     */
    private onClickPlus = () => {
        this.pagenum++
        this.fetchGames()
    }
    /**
     * Decreases page number and calls for AJAX to happen
     */
    private onClickMinus = () => {
        this.pagenum--
        this.fetchGames()
    }

    public render() {
        const {
            type,
            title
        } = this.props

        const {
            data,
            isload
        } = this.state

        if (isload) {
            //this was the only way to get iteration over what cheapshark gives me
            let keys = Object.keys(data)
            let list: any = [] 
            keys.forEach((key: string) => {
                    list.push(<GameItem class="card" thumb={data[key].thumb} name={data[key].title} price={data[key].normalPrice} saleprice={data[key].salePrice} savings={data[key].savings} id={data[key].steamAppID} deal={data[key].dealID}/>)
            })
            return (
                    <> 
                    <IonList>{list}</IonList>
                    {this.pagenum > 0 ? <IonButton onClick={this.onClickMinus} className="button" color="dark" expand="block">Previous Page</IonButton> : <></>}
                    <IonButton onClick={this.onClickPlus} className="button" color="dark" expand="block">Next Page</IonButton>
                    </>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

