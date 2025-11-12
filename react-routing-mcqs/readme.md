# React JS Assignment - Quiz

## Multiple Choice Questions (MCQs)
1. Which library is commonly used for navigation in React applications?

    b. React Router DOM ✅

2. What is the purpose of <BrowserRouter>?

    b. Enables routing and keeps UI in sync with URL ✅

3. Which hook is used to navigate programmatically in React Router v6?

    c. useNavigate ✅

4. Which component is used to define individual routes?

    c. <Route> ✅

5. What does <NavLink> do differently from <Link>?

    b. Applies an “active” class to the current link ✅

6. How do you handle undefined routes in React Router DOM?

    b. Using <Route path="*"> ✅

7. What hook helps you access URL parameters like /user/:id?

    c. useParams ✅

8. What is the correct way to nest routes inside a parent route?

    b. By placing <Route> elements inside another <Route> ✅ 

9. What does the useLocation(. hook return?

    c. Information about the current URL (pathname, search, hash. ✅

10. What is one advantage of client-side routing in React apps?

    c. Navigation occurs without full page reload ✅

## Short Answer Questions

1. What is the difference between <Link> and <NavLink> in React Router?
Both are used to create components used to navigate pages in react router dom app. The main difference between them is that Navilink provides styling to indicate the current page by default, by adding 'active' class.
We can take over this class to provide our custom styling as well.

2. Explain the purpose of the useNavigate() hook.
useNavigate is a hook that allows us to navigate between different urls, programitically, instead of users clicking on a link.

3. What are dynamic routes in React Router? Give an example.
Dynamics routes are routes that follow some similar pattern, predictable by inserting some variable. The dynamic routing allows us to use a single handler for multipler of there routes. We can chapture the variables using the useParams() hook.

4. How can you handle undefined or invalid routes in React?
To handle undefined and invalid routes in React, using react-router dom is to. We first create a 404.jsx page, a page destined for these undefined routes. Then we use react-router-dom to indicate that whenever the route is out of scope, then use this component to render the output. 
To tell the react-router-dom to do so, we add <Route path="*">, to the path mapping.

5. What is the use of the useParams() hook?
useParams hook is used to capture the variables of a dynamic route. It is what makes dynamic Route Handling Possible in React.