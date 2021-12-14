using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using HireFest.DAL.Models.Models;
using Dapper;

namespace HireFestDAL.Classes
{

    public interface IDBOperations
    {
        int Login(Register acc);
        void Signup(Register acc);
        IEnumerable<AssessmentInformation> FetchAssessmentInfo();
        IEnumerable<TestInformation> FetchTestInfo(int ID);
        Profile FetchCandidateInfo();
        void SaveResponses(CandidateResponse resp);
        void SaveResult(CandidateResult result);
    }


    public class DBOperations : IDBOperations
    {
        private readonly string configString = ConfigurationManager.ConnectionStrings["SQLDatabase"].ConnectionString;

        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(configString);
            }
        }

        public void Signup(Register account)
        {
            using(IDbConnection db = Connection)
            {
                string sql = @"INSERT INTO Profile(fName,lName,email,password,phoneno)
                            VALUES(@fName,@lName,@email,@password,@phoneno)";
                db.Open();
                db.Execute(sql,account);
            }
        }

        
        public int Login(Register account)
        {
            string query = "Select * from Profile where Email='" + account.Email + "' and Password='" + account.Password + "'";
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(configString))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();

                    if (myReader.Read())
                    {
                        myReader.Close();
                        myCon.Close();
                        return 1;
                    }
                    else
                    {
                        myReader.Close();
                        myCon.Close();
                        return 0;
                    }
                }
            }
        }
        

        public IEnumerable<AssessmentInformation> FetchAssessmentInfo()
        {
            using (IDbConnection db = Connection)
            {
                string sql = @"Select a.AssessmentId,a.Title,a.Topics,a.Description, Sum(b.Time) as Time, sum(b.Score) as Score from AssessmentInfo a inner join AssessmentQuestions b on a.AssessmentId = b.assessmentInfoId group by b.assessmentInfoId,a.AssessmentId,a.Title,a.Description,a.Topics";
                db.Open();
                return db.Query<AssessmentInformation>(sql);
            }
        }

        public IEnumerable<TestInformation> FetchTestInfo(int ID)
        {
            using (IDbConnection db = Connection)   
            {
                string sql = @"Select a.QuestionId, a.Question,a.Time,a.Score,b.OptionId,b.Description,b.isAnswer From AssessmentQuestions a inner join QuestionOptions b on a.QuestionId = b.assessmentQuestionId and a.assessmentInfoId ='" + @ID + "'";
                db.Open();
                return db.Query<TestInformation>(sql);
            }
        }

        public Profile FetchCandidateInfo()
        {
            using (IDbConnection db = Connection)
            {
                string sql = @"Select fName,lName,email,phoneno from Profile";
                db.Open();
                return db.QuerySingle<Profile>(sql);
            }
        }

        public void SaveResponses(CandidateResponse resp)
        {
            using (IDbConnection db = Connection)
            {

                string sql = @"INSERT INTO CandidateAnswers(candidateAssessmentId,assessmentQuestionId,questionOptionId)
                            VALUES(@candidateAssessmentId,@assessmentQuestionId,@questionOptionId)";
                db.Open();
                db.Execute(sql, resp);
            }
        }

        public void SaveResult(CandidateResult result)
        {
            using (IDbConnection db = Connection)
            {

                string sql = @"INSERT INTO CandidateAssessment(CandidateId,AssessmentId,Score,Status)
                            VALUES(@CandidateId,@AssessmentId,@Score,@Status)";
                db.Open();
                db.Execute(sql, result);
            }
        }

    }
}