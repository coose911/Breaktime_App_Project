1. cannot POST /api/diary_entries/ - ERROR 404
 added code to create a post in create routers in the server file.
2. uncaught (in promise) syntaxError : unexpected token
 in helpers and the file "diary service" in the function "handleFormSubmit" we needed to put the "formSubmit" (state) in curly bois {}. = entry: {formSubmit}
3. cannot GET /api/consumables_data
 the endpoint did not exist on the server, new endpoint created
4. uncaught error : connot find module '../helpers/BreakService'
 file had been moved out of source, rearranged the files.
5. 