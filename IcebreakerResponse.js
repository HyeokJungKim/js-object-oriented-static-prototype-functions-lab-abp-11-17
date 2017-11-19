function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.prototype.BatchCreate = function(){
return emails.map(function(email)
{ return new IcebreakerResponse(email) }}
