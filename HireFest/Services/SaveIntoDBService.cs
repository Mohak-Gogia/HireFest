using HireFest.DAL.Models.Models;
using HireFestDAL.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HireFest.Services
{
    public interface ISaveIntoDBService
    {
        void SaveResult(CandidateResult result);
        void SaveResponses(CandidateResponse resp);

    }
    public class SaveIntoDBService : ISaveIntoDBService
    {
        public void SaveResult(CandidateResult result)
        {
            DBOperations _operations = new DBOperations();
            _operations.SaveResult(result);
        }

        public void SaveResponses(CandidateResponse resp)
        {
            DBOperations _operations = new DBOperations();
            _operations.SaveResponses(resp);
        }

    }
}