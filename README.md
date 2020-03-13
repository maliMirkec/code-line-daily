# code-line-daily

A line of code of the day.

## API

First version of an API is available!

URL: [https:cld.silvestar.codes/api/](https:cld.silvestar.codes/api/)

Methods:
- `/get-random-line`
  - Returns random line
  - Link structure: https://cld.silvestar.codes/api/get-random-line
- `/get-all-lines`
  - Returns every line
  - Link structure: https://cld.silvestar.codes/api/get-all-lines
- `/get-lines-by-lang/:lang:`
  - Returns every line by language provided
  - Link structure: https://cld.silvestar.codes/api/get-lines-by-lang/:lang:
  - Parameter [required, case insensitive]: `:lang:`
  - Languages: `HTML`, `CSS`, `JavaScript`, `PHP`, `Nodejs`
- `/get-line-by-lang/:lang:`
  - Returns latest line by language provided
  - Link structure: https://cld.silvestar.codes/api/get-line-by-lang/:lang:
  - Parameter [required, case insensitive]: `:lang:`
  - Languages: `HTML`, `CSS`, `JavaScript`, `PHP`, `Nodejs`
- `/get-line-by-date/:date:`
  - Returns latest line to the date provided
  - Link structure: https://cld.silvestar.codes/api/get-line-by-date/:date:
  - Parameter [required] : `:date:`
  - Date format: `YYYY-MM-DD`

# ToDo

- Progressive web app ✅
- Browser extension ✅
- README
- CONTRIBUTE
- Newsletter
- Sorting
- Categories
