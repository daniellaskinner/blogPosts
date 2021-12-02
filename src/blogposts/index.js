import React from 'react'
import Blogpost from '../blogpost'
import faker from 'faker'

const Blogposts = () => {
  return <div>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
    <Blogpost avatar={faker.image.people(50, 50, true)} name={faker.name.firstName()} day={faker.date.weekday()} message={faker.lorem.sentence()}/>
  </div>
}

export default Blogposts