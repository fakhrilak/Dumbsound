import React,{useEffect} from 'react';
import { connect } from "react-redux";
import {getallusers} from "../actions/users"
import './AllUsers.css'
const AllUsers = ({getallusers,users:{allusers,loading}})=>{
    useEffect(()=> {
        getallusers()
      }, [])

    return(
        <div>
            <section className="container-users">
                <div className="grid-users">
                    {allusers === null || loading ? <div>Loading...</div> : allusers.map((users) => (
                    <div className="card-users">
                        <p className="nameusers">{users.role}</p>
                        <p className="nameusers">{users.fullName}</p>
                        <p className="nameusers">{users.email}</p>
                        <p className="nameusers">{users.phone}</p>
                        <p className="nameusers">{users.addrass}</p>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state)=>({
    users: state.users
})

export default connect(mapStateToProps, {getallusers})(AllUsers);