import './App.css'

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <h1>
        {props.name} - {props.courseCode} - {props.section}
      </h1>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CIT-U Bachelor of Science in Information Technology: Industry Elective',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      }
    ]
  }

  const name = 'Bianca Beatriz A. ferenal'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App