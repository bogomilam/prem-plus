import React from 'react'
import ClubHome from '../Clubs/ClubHome'
import ClubAway from '../Clubs/ClubAway'


export default class FollowersProfile extends React.Component {

    render() {
        
        const { unshowSearch, unfollowClub, user } = this.props
        const club = this.props.followedClub
        console.log(this.props, "FOLLOWE")
        if (!club) return <div></div>
        return (
            <div className="card-team" onClick={() => unshowSearch()} >
            <div className="card-team">
            <img className="card-img-top" src={club.image} alt="cad thing"/>
            <div className="card-body">
                <h5 className="card-title">{club.name}</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                League Position
                <span className="badge badge-primary badge-pill">{club.table_pos}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Games Played
                <span className="badge badge-primary badge-pill">{club.played_overall}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Overall Average Possession
                <span className="badge badge-primary badge-pill">{club.possessionAVG_overall} </span>
            </li>
            </ul>
            < ClubHome club={club} />
            < ClubAway club={club} />
            </div>
            <div>
            <button type="button" class="btn btn-danger" onClick={() => unfollowClub(user)}>Unfollow {club.name}</button>
            {/* followedClub, followClub, unfollowClub, club */}
            {/* <button type="button" class="btn btn-primary" onClick={() => followClub(club.id)}>Follow {club.name}</button> */}
            </div>
            <div>
            <button type="button" class="btn btn-secondary" onClick={() => unshowSearch()}>Go Back</button>
            </div>
            </div>
        )
    }

}