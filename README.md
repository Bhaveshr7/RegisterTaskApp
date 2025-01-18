RegisterTask App->>

I have created this project with vite+react = npm create vite@latest.
Provide a name for my project,
Then install necessary dependencies like react-router-dom, react-testing-library etc.
Started to create project on the idea of reusable components.
So splitted it into TaskList and TaskItem component to effectively reuse it.
Passed data to components using props and validation is implemented with proptypes.
Implemented react router dom concept to avoid reloading of page as per requirement.
Create, update and delete task has been implemented with completion status functionality.
Filter functionality also coded along.
State is managed effectively by useState and useEffect hooks.
As a bonus ,localstorage feature is included to avoid task(data) loss before completion and record maintanence.
Developed second page using router dom for rendering details of the selected task. It's coded over the idea of useParams hook, where id is passed to access the selected task.
Unit testing is done for TestList component and iteratively tackled errors.
Almost met the requirements and this application is made responsive with help of CSS media queries.

Deployment site -https://registertaskapp.netlify.app/
