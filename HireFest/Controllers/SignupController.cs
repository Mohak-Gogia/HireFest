using HireFest.Services;
using HireFestDAL.Classes;
using HireFest.DAL.Models.Models;
using System.Web.Http;

namespace HireFest.Controllers
{
    
    public class SignupController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Post(Register acc)
        {
            HashingService hashObj = new HashingService();
            acc.Password = hashObj.passwordHashing(acc.Password);

            AuthService auth = new AuthService();
            auth.SignupUser(acc);
            return Ok("Signup Successful");
        }

    }
}
