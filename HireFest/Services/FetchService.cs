using HireFest.DAL.Models.Models;
using HireFestDAL.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HireFest.Services
{
    public interface IFetchService
    {
        IEnumerable<AssessmentInformation> FetchAssessmentInfo();
        IEnumerable<TestInformation> FetchTestInfo(int id);
        Profile FetchCandidateInfo();
    }


    public class FetchService : IFetchService
    {
        public IEnumerable<AssessmentInformation> FetchAssessmentInfo()
        {
            DBOperations _operations = new DBOperations();
            return _operations.FetchAssessmentInfo();
        }

        public IEnumerable<TestInformation> FetchTestInfo(int id)
        {
            DBOperations _operations = new DBOperations();
            return _operations.FetchTestInfo(id);
        }

        public Profile FetchCandidateInfo()
        {
            DBOperations _operations = new DBOperations();
            return _operations.FetchCandidateInfo();
        }
    }
}