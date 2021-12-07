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
    public class SaveResponsesController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Post(CandidateResponse resp)
        {
            SaveIntoDBService service = new SaveIntoDBService();
            service.SaveResponses(resp);
            return Ok("Response Saved");
        }
    }
}
