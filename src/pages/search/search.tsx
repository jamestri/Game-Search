import React from 'react';
import { IonContent, IonSearchbar, IonToolbar, IonTitle, IonPage } from '@ionic/react';
import GameList from '../../components/gamelist/gamelist';


export interface SearchProps {}

export interface SearchState {
    searched: boolean
    search: string | undefined
}

/**
 * Search component for searching for games based on user input
 */
export default class Search extends React.Component<SearchProps, SearchState>{
    public constructor(props: SearchProps) {
        super(props)
        this.state = {
            searched: false,
            search: ""
        }
    }

    /**
     * Sets the state and search option on input
     */
    private setSearch = (e: string | undefined) => {
        this.setState({searched: false})
        if (e === "" || e === undefined) {
            this.setState({searched: false, search: e})
        } else {
            this.setState({searched: true, search: e})
        }
    }

    public render(){
        return (
            <IonPage>
                <IonContent>     
                    <IonToolbar className="bar">
                        <IonTitle>Search</IonTitle>
                    </IonToolbar> 
                    <IonToolbar>
                        <IonSearchbar value={this.state.search} onIonChange={e=> this.setSearch(e.detail.value!)} placeholder="Search for a game by title"/>
                    </IonToolbar>
                    {this.state.searched ? <GameList type="Search" title={this.state.search}/> : <></>}
                </IonContent>
            </IonPage>
        )
    }
}