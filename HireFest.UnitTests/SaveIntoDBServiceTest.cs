using System;
using NUnit.Framework;
using HireFest.Services;
using HireFestDAL.Classes;
using HireFest.DAL.Models.Models;
using Moq;
namespace HireFest.UnitTests
{
    [TestFixture]
    public class SaveIntoDBServiceTest
    {
        [Test]
        [Ignore("Skip")]
        public void ReturnValueOf_SaveResultFunction()
        {
            CandidateResult result = new CandidateResult
            {
                CandidateId = 1,
                AssessmentId = 2,
                Score = 5,
                Status = "Completed"
            };

            Mock<IDBOperations> db = new Mock<IDBOperations>();

            db.Setup(m => m.SaveResult(result));

            SaveIntoDBService service = new SaveIntoDBService();
            service.SaveResult(result);

            //Assert.Null(response);
        }
    }
}
