using System.Threading.Tasks;

namespace ImplantChoice.Business.Contracts
{
    public interface ISomeRuleFactory
    {
        Task<ISomeRule> GetRule(string name);
    }
}