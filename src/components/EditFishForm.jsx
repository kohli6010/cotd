import React from 'react';

class EditFishForm extends React.Component { 
	render() { 
		return (
			<div className="fish-edit">
				<input type="text" name="name" />
				<input type="text" name="price" />
				<select name="status" id="status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" id="desc"></textarea>
				<input type="text" name="image" id="image"/>
			</div>
		);
	}
}

export default EditFishForm;