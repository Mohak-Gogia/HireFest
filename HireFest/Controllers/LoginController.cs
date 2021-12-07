 using System;
using System.Collections.Generic;
using System.Web.Http;
using HireFest.Services;
using HireFestDAL.Classes;
using HireFest.DAL.Models.Models;

namespace HireFest.Controllers
{
    
    public class LoginController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Post(Register acc)
        {
            HashingService hashObj = new HashingService();
            acc.Password = hashObj.passwordHashing(acc.Password);

            AuthService auth = new AuthService();
            int result = auth.LoginUser(acc);
            if (result == 1)
            {
                return Ok("Login Successful");
            }
            else
            {
                return Ok("Invalid Credentials");
            }
                
        }
    }
}
