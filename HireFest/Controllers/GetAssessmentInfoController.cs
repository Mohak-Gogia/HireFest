using System;
using System.Collections.Generic;
using System.Web.Http;
using HireFest.DAL.Models.Models;
using HireFest.Services;

namespace HireFest.Controllers
{
    public class GetAssessmentInfoController : ApiController
    {
        [HttpGet]
        public IEnumerable<AssessmentInformation> GetAssessmentInfo()
        {
            FetchService fetch = new FetchService(); 
            return fetch.FetchAssessmentInfo();
        }
    }
}
