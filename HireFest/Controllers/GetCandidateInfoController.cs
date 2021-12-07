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
    public class GetCandidateInfoController : ApiController
    {
        [HttpGet]
        public IEnumerable<Profile> GetAssessmentInfo()
        {
            FetchService fetch = new FetchService();
            return fetch.FetchCandidateInfo();
        }
    }
}
