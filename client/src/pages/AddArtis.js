import React, { useState } from "react";
import { postartis} from "../actions/artis";
import { connect } from "react-redux";
import './AddArtis.css'
const AddArtis = ({  postartis }) => {
  const [formData, setFormData] = useState({
    name:"",
    old:"",
    type:"",
    startcarer:""
  });

  const onChange = (e) => {
    const {name,value}= e.target
    setFormData({ ...formData, [name]: value });
  };

  const { name,old,type,startcarer} = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    postartis(
      name,
      old,
      type,
      startcarer,
    );
    setFormData({
      name:"",
      old:"",
      type:"",
      startcarer:""
    })
  };

  return (
    <div className = "background-addartis" style={{paddingTop:100}}>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-input-artis">
            <input
              type="text"
              className="custom-input"
              placeholder="Name"
              value={name}
              name="name"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-input-artis">
            <input
              type="text"
              className="custom-input"
              placeholder="Old"
              value={old}
              name="old"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-input-artis">
            <input
              type="text"
              className="custom-input"
              placeholder="Type"
              value={type}
              name="type"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-input-artis">
            <input
              type="text"
              className="custom-input"
              placeholder="Startcarer"
              value={startcarer}
              name="startcarer"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-submit" >
            <button className="save" type="submit">
              save
            </button>
          </div>
        </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  artis: state.artis,
});

export default connect(mapStateToProps, { postartis})(AddArtis );