import React from 'react';
import {connect} from 'dva';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const mapStateToProps = state=>{
  return {
    type: state.gov.type,
    info: state.gov.info
  }
}

@connect(mapStateToProps)
@Form.create()
class NewGov extends React.Component{
  // 提交表单
  handleSubmit = e=>{
    console.log('提交表单...');
    this.props.form.validateFields((err, vals)=>{
      console.log('errr...', err, vals);
    })
  }

  // 重置表单
  resetForm = e=>{
    this.props.form.resetFields();
  }

  componentDidMount(){
    console.log('info...', this.props.info);
    setTimeout(()=>{
      this.props.form.setFieldsValue(this.props.info);
    })
  }

  get disabled(){
    return this.props.type==='detail'
  }

  render(){
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    console.log('props...', this.props, this.disabled);
    return <>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="机构名称">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入你的机构名称',
              },
            ],
          })(<Input disabled={this.disabled}/>)}
        </Form.Item>
        <Form.Item label="机构地区">
          {getFieldDecorator('area', {
            rules: [
              {
                required: true,
                message: '请输入你的机构地区',
              },
            ],
          })(<Input  disabled={true}/>)}
        </Form.Item>
        <Form.Item label="机构地址">
          {getFieldDecorator('address', {
            rules: [
              {
                required: true,
                message: '请输入你的机构地址',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="校长姓名">
          {getFieldDecorator('master', {
            rules: [
              {
                required: true,
                message: '请输入校长姓名',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="校长手机号码">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                message: '请输入校长手机号码',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item >
         <span>合同信息</span>
        </Form.Item>
        <Form.Item label="合同编号">
          {getFieldDecorator('num')(<Input />)}
        </Form.Item>
        <Form.Item label="是否可用">
          {getFieldDecorator('enable', {
            valuePropName: 'checked'
          })(<Checkbox />)}
        </Form.Item>
        {this.disabled?null:<Form.Item {...tailFormItemLayout}>
          <Button onClick={this.resetForm}>取消</Button>
          <Button type="primary" htmlType="submit" style={{marginLeft: '30px'}}>提交</Button>
        </Form.Item>}
      </Form>
    </>
  }
}
export default NewGov;
