namespace ImplantChoice.Business.Contracts
{


    public interface ISomeRuleFactory
    {
        ISomeRule GetRule(string name);
    }
}