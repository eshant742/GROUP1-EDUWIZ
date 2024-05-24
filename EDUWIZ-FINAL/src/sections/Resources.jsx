import React, { useState } from 'react';
import backgroundImage from '../assets/images/background.jpg'; // Import your background image

const Resource = () => {
  const [selectedSemester, setSelectedSemester] = useState('one');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const addResource = (title, description) => {
    return (
      <div className="text-left border border-gray-300 rounded p-4 mb-4 bg-white bg-opacity-75">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };

  const getResourcesForSemester = () => {
    switch (selectedSemester) {
      case 'one':
        return (
          <>
            {addResource('Computational Thinking and Programming', 'Computational Thinking and Programming" teaches problem-solving through breaking down complex issues into manageable parts and implementing solutions using programming languages like C/C++.')}
            {addResource('Previous Year Papers', 'Description for Resource 1')}
            {addResource('Database Management Systems', 'Database Management System (DBMS) teaches us to manage and organize data, allowing users to store, retrieve, update, and manipulate data efficiently.')}
          </>
        );
      case 'two':
        return (
          <>
            {addResource('Data Structures', 'The Data Structures subject covers the study of organizing and managing data effectively to perform operations efficiently.')}
            {addResource('Question Bank for Data Structures', 'Description for Resource 1')}
            {addResource('Object Oriented Programming and Systems', 'Object-Oriented Programming (OOP) in Java focuses on building software by organizing code into objects, each representing a real-world entity.')}
          </>
        );
      case 'three':
        return (
          <>
            {addResource('Software Engineering', 'Software Engineering involves applying systematic, disciplined, and quantifiable approaches to develop, operate, and maintain software systems efficiently.')}
            {addResource('Dynamic Programming', 'Description for Resource 2')}
            {addResource('Theory of Automata', 'The Theory of Automata explores mathematical models of computation, focusing on abstract machines called automata.')}
          </>
        );
      case 'four':
        return (
          <>
            {addResource('Discrete Mathematics', 'Discrete Mathematics deals with mathematical structures that are distinct and countable, rather than continuous.')}
            {addResource('Modern Programming Language', 'Modern Programming Language (Python) is a versatile, high-level programming language known for its simplicity and readability.')}
            {addResource('Compiler Design', 'Compiler Design focuses on creating software systems that translate high-level programming languages into machine code or intermediate code for execution on a computer.')}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-black bg-opacity-50 min-h-screen p-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">Select a Semester</h1>
        <select
          id="semesterSelect"
          onChange={handleSemesterChange}
          value={selectedSemester}
          className="block w-1/2 p-2 border border-gray-300 rounded mb-6"
        >
          <option value="one">First Semester</option>
          <option value="two">Second Semester</option>
          <option value="three">Third Semester</option>
          <option value="four">Fourth Semester</option>
        </select>
        <div id="resourcesList" className="w-full max-w-4xl">
          {getResourcesForSemester()}
        </div>
      </div>
    </div>
  );
};

export default Resource;
