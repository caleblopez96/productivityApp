using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BillsController : ControllerBase
    {
        private readonly BillService _billService;

        public BillsController(BillService billService)
        {
            _billService = billService;
        }

        [HttpGet]
        public async Task<IActionResult> GetBills()
        {
            var bills = await _billService.GetBillsFromDB();
            return Ok(bills);
        }
    }
}
