package keeper

import (
	"github.com/zeta-chain/zetacore/x/emissions/types"
)

var _ types.QueryServer = Keeper{}
