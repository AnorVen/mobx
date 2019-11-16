import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{
   static propTypes = {
      value: PropTypes.any.isRequired,
      onChange: PropTypes.func,
      nativeProps: PropTypes.object
   }

   static defaulProps = {
      onChange: function(){},
      nativeProps: {}
   }

   input = React.createRef();

   componentDidUpdate(prevProps, prevState){
      let inp = this.input.current;

      if(prevProps.value !== this.props.value || 
         this.props.value.toString() !== inp.value){
         inp.value = this.props.value;
      }
   }
   
   checkChange = (e) => {
      if(e.target.value !== this.props.value.toString()){
         this.props.onChange(e.target.value);
      }
   }

   checkEnter = (e) => {
      if(e.keyCode === 13){
         this.checkChange(e);
      }
   }

   render(){
      return <input {...this.props.nativeProps}
                    defaultValue={this.props.value}
                    onBlur={this.checkChange}
                    onKeyUp={this.checkEnter}
                    ref={this.input}
         />
   }
}