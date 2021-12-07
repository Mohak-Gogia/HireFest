using HireFest.DAL.Models.Models;
using HireFest.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HireFest.Controllers
{
    public class SaveResultController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Post(CandidateResult result)
        {
            SaveIntoDBService service = new SaveIntoDBService();
            service.SaveResult(result);
            return Ok("Result Saved");
        }
    }
}
