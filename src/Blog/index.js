import React from 'react'
import ApprovalCard from '../approvalcard'
import faker from 'faker'
import Blogpost from '../blogpost'

const Blog = () => {
  return <div className="ui container comments">
    <ApprovalCard>
      <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()}
                message={faker.lorem.sentence()}/>
    </ApprovalCard>
    <ApprovalCard>
      <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()}
                message={faker.lorem.sentence()}/>
    </ApprovalCard>
    <ApprovalCard>
      <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()}
                message={faker.lorem.sentence()}/>
    </ApprovalCard>
    <ApprovalCard>
      <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()}
                message={faker.lorem.sentence()}/>
    </ApprovalCard>
    <ApprovalCard>
      <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()}
                message={faker.lorem.sentence()}/>
    </ApprovalCard>
  </div>
}

export default Blog
