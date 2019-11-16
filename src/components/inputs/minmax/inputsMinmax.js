import React from 'react';
import PropTypes from 'prop-types';
import LazyInput from '~/components/inputs/lazy';
import styles from './minmax.module.css';

export default class extends React.Component{
   static propTypes = {
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
      onChange: PropTypes.func
   }

   static defaultProps = {
      onChange: function(){}
   }

   componentDidMount(){
      this.set(this.props.value);
   }
   
   increase = () => this.set(this.props.value + 1)
   decrease = () => this.set(this.props.value - 1)

   set(newCnt){
      let value = Math.max(this.props.min, Math.min(newCnt, this.props.max));
      this.setState({inputVal: value});

      if(value !== this.props.value){
         this.props.onChange(value);
      }
   }

   applyValue = (val) => {
      let cnt = parseInt(val);
      this.set(isNaN(cnt) ? this.props.min : cnt);
   }

   render(){
      return <div>
         <button type="button" onClick={this.decrease}>-</button>
         <LazyInput nativeProps={{
                     className: styles.input,
                     type: "text" 
                  }}
                  value={this.props.value} 
                  onChange={this.applyValue}
         />
         <button type="button" onClick={this.increase}>+</button>
      </div>
   }
}