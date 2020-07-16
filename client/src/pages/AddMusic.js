import React, { useState, useEffect } from "react";
import { postmusic} from "../actions/music";
import { getallartis} from "../actions/artis";
import { connect } from "react-redux";

const AddMusic = ({ getallartis, postmusic, artis:{allartis,loading}}) => {

  useEffect(()=>{
      getallartis();
  },[]);

  const [formData, setFormData] = useState({
    title:"",
    thumbnail:"",
    artisId:"",
    year:"",
    attache:""
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { title, thumbnail,artisId, year , attache } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    postmusic(
      title,
      year,
      thumbnail,
      artisId,
      attache,
    );
    setFormData({
      title:"",
      thumbnail:"",
      artisId:"",
      year:"",
      attache:""
    })
  };

  return (
    <div style={{paddingTop:100}}>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-input-artis">
            <input
              type="text"
              className="custom-input"
              placeholder="Title Music"
              value={title}
              name="title"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-input-artis">
            <input
              type="text"
              className="custom-input"
              placeholder="Year"
              value={year}
              name="year"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-input-artis">
            <input
              type="text"
              className="custom-input"
              placeholder="Thumbnail"
              value={thumbnail}
              name="thumbnail"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-input-artis">
          <select
							name="artisId"
							className="custom-select"
							onChange={(e) => {
								onChange(e);
							}}
							required
						>
							<option value={artisId}>Select Artist</option>
							{allartis == null || loading ? (
								'loading'
							) : (
								allartis.map((artis) => (
									<option value={artis.id} key={artis.id}>
										{artis.name}
									</option>
								))
							)}
						</select>
          </div>
          <div className="form-input-artis">
            <input
              type="text"
              className="custom-input"
              placeholder="Url Music"
              value={attache}
              name="attache"
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

export default connect(mapStateToProps, {getallartis, postmusic})(AddMusic );