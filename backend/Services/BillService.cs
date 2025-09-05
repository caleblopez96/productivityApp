using backend.Models;
using Microsoft.Data.SqlClient;
using Dapper;

namespace backend.Services
{
    public class BillService(IConfiguration configuration)
    {
        private readonly string _connectionString = configuration.GetConnectionString("DefaultConnection");

        public async Task<List<BillDto>> GetBillsFromDB()
        {
            using var connection = new SqlConnection(_connectionString);
            string query = @"SELECT Id, Name, Amount, DueDate
                             FROM Bills";

            IEnumerable<BillDto> dbBills = await connection.QueryAsync<BillDto>(query);
            return dbBills.ToList();
        }
    }
}

