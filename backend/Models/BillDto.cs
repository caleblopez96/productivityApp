namespace backend.Models
{
    public class BillDto
    {
        public required int Id { get; set; }
        public required string Name { get; set; }
        public required int Amount { get; set; }
        public required DateTime DueDate { get; set; }
    }
}
