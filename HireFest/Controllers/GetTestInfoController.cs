using HireFest.DAL.Models.Models;
using HireFest.Services;
using HireFestDAL.Classes;
using System.Collections.Generic;
using System.Web.Http;

namespace HireFest.Controllers
{
    public class GetTestInfoController : ApiController
    {
        [HttpGet]
        [Route("api/getTestInfo/{id}")]
        public IEnumerable<TestInformation> GetTestInfo(int id)
        {
            FetchService fetch = new FetchService();
            return fetch.FetchTestInfo(id);
        }
    }
}
