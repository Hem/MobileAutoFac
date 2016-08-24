
using SimpleNet.Core.Data;
using SimpleNet.Core.Data.Repository;


namespace ImplantChoice.Repository
{
    public abstract class ImplantChoiceBaseRepo : AbstractSimpleRepository
    {
        public ImplantChoiceBaseRepo( ISimpleDataAccessLayer database )
        {
            Database = database;
        }

        public override ISimpleDataAccessLayer Database { get; }
        

    }

    
}
